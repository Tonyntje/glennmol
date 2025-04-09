import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  projectType: z.enum(['Kitchen', 'Bathroom', 'Extension', 'Other']),
});

type ContactFormData = z.infer<typeof contactSchema>;

const formAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const inputAnimation = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 }
  }
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // In a real app, you'd send this to your backend
      console.log('Form data:', data);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      reset();
      alert('Thank you for your message! We will get back to you soon.');
    } catch (error) {
      alert('There was an error sending your message. Please try again.');
    }
  };

  return (
    <motion.form 
      initial="hidden"
      animate="visible"
      variants={formAnimation}
      onSubmit={handleSubmit(onSubmit)} 
      className="space-y-6"
    >
      <motion.div variants={inputAnimation}>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register('name')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary transition-all duration-200 hover:border-primary/50"
        />
        <AnimatePresence>
          {errors.name && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-1 text-sm text-red-600"
            >
              {errors.name.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div variants={inputAnimation}>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary transition-all duration-200 hover:border-primary/50"
        />
        <AnimatePresence>
          {errors.email && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-1 text-sm text-red-600"
            >
              {errors.email.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div variants={inputAnimation}>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          {...register('phone')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary transition-all duration-200 hover:border-primary/50"
        />
        <AnimatePresence>
          {errors.phone && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-1 text-sm text-red-600"
            >
              {errors.phone.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div variants={inputAnimation}>
        <label htmlFor="projectType" className="block text-sm font-medium text-gray-700">
          Project Type
        </label>
        <select
          id="projectType"
          {...register('projectType')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary transition-all duration-200 hover:border-primary/50"
        >
          <option value="Kitchen">Kitchen Renovation</option>
          <option value="Bathroom">Bathroom Remodel</option>
          <option value="Extension">Home Extension</option>
          <option value="Other">Other</option>
        </select>
        <AnimatePresence>
          {errors.projectType && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-1 text-sm text-red-600"
            >
              {errors.projectType.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div variants={inputAnimation}>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary transition-all duration-200 hover:border-primary/50"
        />
        <AnimatePresence>
          {errors.message && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-1 text-sm text-red-600"
            >
              {errors.message.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </motion.button>
    </motion.form>
  );
}
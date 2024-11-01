import { CommonProps } from '@/@types/common'
import { cn } from '@/utils'
import { motion } from 'framer-motion'

interface Props extends CommonProps {
  delay?: number
}

const Section = (props: Props) => {
  const { className, children, delay = 0, ...rest } = props
  return (
    <motion.section
      {...rest}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className={cn('my-xl', className)}
    >
      {children}
    </motion.section>
  )
}

export default Section

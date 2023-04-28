import styles from './Avatar.module.css'

interface AvatarProps {
  hasBorder?: boolean,
  src: string,
}

export const Avatar = ({ src, hasBorder = true}: AvatarProps) => {
  
  return (
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      src={src} />
  )
}
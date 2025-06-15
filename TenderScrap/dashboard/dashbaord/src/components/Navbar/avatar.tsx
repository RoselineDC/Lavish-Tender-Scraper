type AvatarProps = {
  src?: string
  initials?: string
  className?: string
  square?: boolean
  slot?: string
}

export const Avatar = ({ src, initials, className = '', square }: AvatarProps) => {
  return (
    <div
      className={`inline-flex items-center justify-center overflow-hidden ${
        square ? 'rounded' : 'rounded-full'
      } bg-gray-200 w-8 h-8 ${className}`}
    >
      {src ? <img src={src} className="w-full h-full object-cover" /> : initials}
    </div>
  )
}

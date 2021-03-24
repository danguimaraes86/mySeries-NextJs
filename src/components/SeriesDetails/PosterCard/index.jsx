import Image from 'next/image'

export default function PosterCard({ url, name }) {
  return (
    <div className='col-12'>
      <Image
        className='rounded'
        src={url}
        width={500}
        height={800}
        alt={`poster da série ${name}`}
      />
    </div>
  )
}

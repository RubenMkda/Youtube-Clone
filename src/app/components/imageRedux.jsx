import Image from 'next/image'

const ImageRedux = ({user}) => {
    
    const imageloader = () => {
        return user.imageUrl
    }

    return (
    <>
    {!(Object.keys(user).length === 0) ? <Image loader={imageloader} src='adada.jpg' alt={user.name} width={40} height={40}/> : <Image src='/icon.png' width={40} height={40} alt='hola'/>}
    </>)
}

export default ImageRedux


// props type   
type SectionTitleProps = {
    title: string,
    subTitle: string
}

const SectionTitle = ({ title, subTitle }: SectionTitleProps) => {
    return (
            <div className='text-center text-gray-500/90 flex flex-col justify-center items-center w-full md:w-1/2 mx-auto '>
                <h2 className='text-2xl md:text-4xl  font-playfair mb-4 text-black'>{title}</h2>
                <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>{subTitle}</p>
            </div>
    )
}

export default SectionTitle

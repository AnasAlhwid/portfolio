const TitleHeader = ( { title, sub }) => {
    return (
        <div className="flex flex-col items-center gap-5 cursor-default">
            <div className="bg-card-gray py-2 px-4 rounded-full w-fit text-xs md:text-sm lg:text-base text-nowrap">
                <p>{sub}</p>
            </div>
            <div className="font-semibold text-3xl md:text-4xl lg:text-5xl text-center">
                {title}
            </div>
        </div>
    )
}
export default TitleHeader

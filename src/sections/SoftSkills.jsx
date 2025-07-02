import {softSkills} from "../constants/index.js";

const SoftSkills = () => {
    return (
        <div className="soft-layout">
            {softSkills.map(({ imgPath, title, desc }) => (
                <div key={title} className="soft-card card-layout">
                    <div className="*:select-none">
                        <img
                            src={imgPath}
                            alt={title}
                            draggable="false"
                            className="w-6 h-8 md:w-8 md:h-10"
                        />
                    </div>
                    <h3 className="text-antique-brass font-semibold">
                        {title}
                    </h3>
                    <h4>
                        {desc}
                    </h4>
                </div>
            ))}
        </div>
    )
}
export default SoftSkills

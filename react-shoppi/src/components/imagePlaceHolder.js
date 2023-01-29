import {useState} from "react";

const ImagePlaceHolder = ({imageUrl, alt}) => {
    const [loading, setLoading] = useState(true);

    /* replace this stars with imagekit.io key */
    const newImage = imageUrl.replace("***", process.env.REACT_APP_IMAGEKIT_KEY);

    return (
        <div className="image-container">


        <img
                className="place-holder"
                style={{display: loading ? 'block' : 'none'}}
                src="https://t3.ftcdn.net/jpg/03/45/05/92/360_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg"
                width="100%"
                height="auto"
                alt="image placeholder"
            />

            <img
                className="image"
                style={{visibility: loading ? 'hidden' : 'visible'}}
                src={newImage}
                alt={alt}
                width="100%"
                height="auto"
                loading="lazy"
                onLoad={() => setLoading(false)}
            />

        </div>
    );
};

export default ImagePlaceHolder;
const CustomImage = (prop) => {
    const { source,  width, height } = prop;
    return (
      <img
        class="image"
        src={source}
        
        width={width}
        height={height}
      />
    );
  };
  
  export default CustomImage;
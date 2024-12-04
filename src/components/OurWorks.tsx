import ImageBg from "@/components/ImageBg"
import ProjectList from "@/components/ProjectList"

const OurProjects = () => {
  const data = {
    header: "Our Works",
    desc: "Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise.",
    src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1732822552/45176455_9151730_zok7cd.jpg",
  }

  const cat = {
    header: "Let us Bring your Ideas to Life in the Digital World.",
    desc: "No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.",
    src: "https://res.cloudinary.com/dudwjf2pu/image/upload/c_crop,ar_16:9/v1732877160/5513846_2862210_lntbom.jpg",
    buttonText: "Start Project",
  }

  return (
    <section>
      <ImageBg header={data.header} desc={data.desc} src={data.src} />
      <ProjectList />
      <section>
        <ImageBg desc={cat.desc} src={cat.src} header={cat.header} buttonText={cat.buttonText} />
      </section>

    </section>
  )
}

export default OurProjects
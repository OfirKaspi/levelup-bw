import ImageBg from "@/components/ImageBg"

const Subscription = () => {
  const data = {
    header: "Thank you for your Interest in LevelUp.",
    desc: "We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.",
    src: "https://res.cloudinary.com/dudwjf2pu/image/upload/c_crop,ar_4:3/v1732882165/5617154_2920891_bspoyl.jpg",
    buttonText: "Start Project",
  }

  return (
    <section>
      <ImageBg desc={data.desc} src={data.src} header={data.header} buttonText={data.buttonText} />
    </section>
  )
}

export default Subscription
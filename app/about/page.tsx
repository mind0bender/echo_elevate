export default function AboutPage(): JSX.Element {
  return (
    <div
      className={`grow px-6 sm:px-8 md:px-10 py-10 sm:py-16 md:py-20 flex flex-col justify-center items-center gap-10`}
    >
      <h4 className={`text-2xl sm:text-3xl font-medium`}>About Echo Elevate</h4>

      <div className={`max-w-3xl flex flex-col gap-2`}>
        <p className={`sm:text-lg px-2`}>
          Welcome to Echo Elevate, where innovation meets expertise. With a
          fervent dedication to digital excellence, we specialize in
          transforming businesses. Our passion lies in employing cutting-edge
          solutions to ensure businesses thrive in the digital landscape.
        </p>
      </div>

      <div className={`max-w-3xl flex flex-col gap-2`}>
        <h5 className={`text-xl sm:text-2xl font-medium`}>Our Story</h5>
        <p className={`sm:text-lg`}>
          Echo Elevate was founded with a vision: to empower businesses with
          digital solutions that drive growth. With a team of dedicated experts,
          we&apos;ve successfully transformed numerous enterprises, helping them
          thrive in the digital landscape.
        </p>
      </div>

      <div className={`max-w-3xl flex flex-col gap-2`}>
        <h5 className={`text-xl sm:text-2xl font-medium`}>Why Choose Us?</h5>
        <ul className={`list-disc pl-5`}>
          <li>
            Expertise: Our team comprises skilled professionals adept in the
            latest technologies.
          </li>
          <li>
            Innovation: We stay ahead in the digital realm, offering innovative
            solutions tailored to your unique needs.
          </li>
          <li>
            Results-Driven: We focus on delivering measurable results, ensuring
            your business achieves online success.
          </li>
        </ul>
      </div>
    </div>
  );
}

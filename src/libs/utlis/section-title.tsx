interface ISectionTitle {
  subtitle: string;
  title: string;
}

export function SectionTitle({ subtitle, title }: ISectionTitle) {
  return (
    <div className="flex flex-col items-center justify-center text-center leading-loose my-10">
      <h3 className="text-lg uppercase font-extrabold leading-loose text-blue-600 tracking-wider">
        {subtitle}
      </h3>
      <h2 className="lg:text-6xl text-2xl font-extrabold capitalize">
        {title}
      </h2>
    </div>
  );
}

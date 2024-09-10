export default function ({ title, subtitle }: any) {
  return (
    <div>
      <h1 className="m-0 text-center text-8xl tracking-tight font-bold text-gray-200">
        {title}
      </h1>
      <p className="font-semibold text-base text-gray-700 text-center -m-5">
        {subtitle}
      </p>
    </div>
  );
}

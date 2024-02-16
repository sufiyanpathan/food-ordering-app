export default function SectionHeaders({ props }) {
  return (
    <>
      <h3 className="uppercase text-gray-500 font-semibold leading-4">
        {props.subHeader}
      </h3>
      <h2 className="text-primary font-bold text-4xl italic">
        {props.mainHeader}
      </h2>
    </>
  );
}

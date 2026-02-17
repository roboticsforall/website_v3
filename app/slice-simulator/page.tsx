import {
  SliceSimulator,
  getSlices,
} from "@slicemachine/adapter-next/simulator";
import { SliceZone } from "@prismicio/react";

import { components } from "../../slices";

type PageProps = {
  searchParams?: {
    state?: string;
  };
};

export default function SliceSimulatorPage({
  searchParams,
}: PageProps) {
  const slices = getSlices(searchParams?.state);

  return (
    <SliceSimulator>
      <SliceZone slices={slices} components={components} />
    </SliceSimulator>
  );
}
// import {
//   SliceSimulator,
//   SliceSimulatorParams,
//   getSlices,
// } from "@slicemachine/adapter-next/simulator";
// import { SliceZone } from "@prismicio/react";

// import { components } from "../../slices";

// export default function SliceSimulatorPage({
//   searchParams,
// }: SliceSimulatorParams) {
//   const slices = getSlices(searchParams.state);

//   return (
//     <SliceSimulator>
//       <SliceZone slices={slices} components={components} />
//     </SliceSimulator>
//   );
// }

import { Disclosure } from '@headlessui/react'
import {BiChevronDown, BiChevronUp} from "react-icons/bi";
const PlaysFilter = () => {
  return (
    <Disclosure>
    {({ open }) => (
      <>
      <Disclosure.Button className="py-2 flex items-center gap-3">
      {open ? <BiChevronUp /> : <BiChevronDown />}
        Is team pricing available?
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500">
        Yes! You can purchase a license that you can share with your entire
        team.
      </Disclosure.Panel>
      </>
    )}
    </Disclosure>
  );
};

export default PlaysFilter;

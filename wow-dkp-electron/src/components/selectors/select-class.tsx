import { api } from "@/lib/api-handler";
import { Class, ClassItem, Specialization } from "@/types/class";
import { useEffect, useState } from "react";

type Props = {};
type SelectedValue = {
  class: Class;
  specialization: Specialization;
};
const SelectClass = (props: Props) => {
  const [classItems, setClassItems] = useState<ClassItem[]>([]);
  const [selectedValue, setSelectedValue] = useState<SelectedValue | null>(
    null,
  );

  const fetchClasses = async () => {
    try {
      const { data } = await api.get("/data/classes");
      setClassItems(data);
    } catch {
      setClassItems([]);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  const handleClassSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as Class;

    setSelectedValue({
      class: value,
      specialization: undefined as any,
    });
  };

  const handleSpecSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as Specialization;

    setSelectedValue((prev) =>
      prev
        ? {
            ...prev,
            specialization: value,
          }
        : null,
    );
  };
  const selectedClass = classItems.find(
    (item) => item.enum === selectedValue?.class,
  );

  console.log(selectedValue);

  //TODO: create gearscore input and send everything to backend,
  // TODO: in backend create controller,route for char creaction linking to guild,
  // TODO:  create validations for username uniqunes, gearscore from 0 - 7k, and validations for class and spec
  return (
    <div className="grid  md:grid-cols-2 gap-2">
      <select className="select" onChange={handleClassSelect}>
        <option value="">Select class</option>

        {classItems.map((classItem) => (
          <option key={classItem.id} value={classItem.enum}>
            {classItem.name}
          </option>
        ))}
      </select>

      {selectedClass && (
        <select className="select" onChange={handleSpecSelect}>
          <option value="">Select specialization</option>

          {selectedClass.specializations.map((spec) => (
            <option key={spec.id} value={spec.enum}>
              {spec.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default SelectClass;

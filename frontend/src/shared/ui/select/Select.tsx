import { useRef, useState } from "react";
import { useClickOutsideEsc } from "@/shared/hooks/useClickOutsideEsc";

type SelectItem = { [key: string]: string | number };

type SelectProps = {
  data: SelectItem[];
  value?: SelectItem;
  onClick?: (item: SelectItem) => void;

  labelKey?: string;
  valueKey?: string;

  className?: string;
  placeholder?: string;
};

export const Select = (props: SelectProps) => {
  const {
    data,
    value,
    onClick,
    className,
    placeholder = "...Select",
    labelKey = "name",
    valueKey = "key",
  } = props;

  //

  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const [selectedValue, setSelectedValue] = useState<SelectItem | undefined>(
    value ?? data[0],
  );

  const toggleListHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickHandler = (item: SelectItem) => {
    setSelectedValue(item);
    setIsOpen(false);
    onClick?.(item);
  };

  const closeSelectHandler = () => setIsOpen(false);

  useClickOutsideEsc(selectRef, closeSelectHandler);

  return (
    <div
      ref={selectRef}
      className={`select ${className || ""}`}
    >
      <div
        className="select-header"
        onClick={toggleListHandler}
      >
        {(selectedValue?.[labelKey] as string) || placeholder}
        <div className={`select-arrow ${isOpen ? "open" : ""}`} />
      </div>

      <ul className={`select-list ${isOpen ? "open" : ""}`}>
        {data.map((item) => {
          const itemKey = item[valueKey];
          const itemValue = item[labelKey];
          return (
            <li
              key={itemKey}
              className="select-item"
              onClick={() => onClickHandler(item)}
            >
              {itemValue}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

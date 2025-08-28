import React, { useState } from "react";

type Gender = "Nam" | "Nữ" | "Khác";

export default function Ex6Simple() {
  const [selectedGender, setSelectedGender] = useState<Gender>("Nam");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedGender(e.target.value as Gender);
  };

  const options: Gender[] = ["Nam", "Nữ", "Khác"];

  return (
    <div>
      {options.map((Option) => (
        <label key={Option} style={{ display: "block", fontSize: 28 }}>
          <input
            type="radio"
            name="gender"
            value={Option}
            checked={selectedGender === Option}
            onChange={handleChange}
          />
          {Option}
        </label>
      ))}
      <p style={{ fontSize: 28 }}>Selected gender: {selectedGender}</p>
    </div>
  );
}
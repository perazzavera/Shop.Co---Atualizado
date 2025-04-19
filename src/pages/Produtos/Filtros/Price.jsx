import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

// Função para formatar o valor do slider
function valuetext(value) {
  return `$${value}`;
}

export default function Price({ setFiltroPreco }) {
  // Estado local do componente para o valor do slider
  const [value, setValue] = React.useState([50, 300]);
  const [isOpen, setIsOpen] = React.useState(false);

  // Função para alternar a visibilidade do dropdown
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Função para lidar com a mudança do slider
  const handleChange = (event, newValue) => {
    setValue(newValue);

    // Atualiza o filtro de preço no componente pai
    setFiltroPreco({
      min: newValue[0],
      max: newValue[1],
    });
  };

  return (
    <div className="w-full">
      {/* Botão de dropdown */}
      <button
        type="button"
        onClick={toggleDropdown}
        className="flex justify-between items-center w-full text-left font-medium text-gray-900 py-2"
      >
        <h3 className="font-semibold text-2xl">Price</h3>
        {isOpen ? (
          <LuChevronUp className="h-4 w-4 text-gray-600" />
        ) : (
          <LuChevronDown className="h-4 w-4 text-gray-600" />
        )}
      </button>

      {/* Slider visível apenas se isOpen for true */}
      {isOpen && (
        <Box
          sx={{
            width: "100%",
            padding: "0 10px",
          }}
          className="mt-2"
        >
          <Slider
            value={value}
            onChange={handleChange}
            min={50}
            max={300}
            step={10}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            valueLabelFormat={(val) => `$${val}`}
            marks={[
              { value: 50, label: "$50" },
              { value: 300, label: "$300" },
            ]}
            sx={{
              color: "#000",
              height: 6, // espessura geral
              "& .MuiSlider-thumb": {
                backgroundColor: "#000",
                border: "2px solid white",
              },
              "& .MuiSlider-rail": {
                color: "#ccc",
              },
              "& .MuiSlider-track": {
                backgroundColor: "#000",
              },
              "& .MuiSlider-valueLabel": {
                backgroundColor: "#000",
              },
            }}
          />
        </Box>
      )}
    </div>
  );
}

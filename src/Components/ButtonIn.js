import { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5wc from "@amcharts/amcharts5/wc";
import PropTypes from "prop-types";
import "../App.css";

const initializeChart = (data) => {
  let finalData = [];
  let filteredData = data;

  let inValueSum = 0;

  filteredData.forEach((item) => {
    inValueSum += parseInt(item.in_value);
  });

  let categoryValue2 = inValueSum;

  finalData.push({ category: categoryValue2, value: 2.2 });

  let root = am5.Root.new("ch-in");

  // Set themes
  root.setThemes([am5themes_Animated.new(root)]);

  // Add series
  let series = root.container.children.push(am5wc.WordCloud.new(root, {
      maxCount: 100,
      minWordLength: 2,
      minFontSize: am5.percent(52),
      maxFontSize: am5.percent(60),
      angles: [0],
      label: {
        text: (category) => {
          // Retrieve the numeric value from finalData based on the category
          const dataItem = finalData.find((item) => item.category === category);
          if (dataItem) {
            return dataItem.value.toString();
          }
          return "";
        },
        fontSize: am5.percent(1200),
        fill: am5.color("#FFFFFF"),

      },
    }));
  series.data.setAll(finalData);

  return () => {
    root.dispose();
  };
};

const ButtonIn = ({ data }) => {

  useEffect(() => {
    const disposeChart = initializeChart(data);

    return () => {
      disposeChart();
    };
  }, [data]);

  return (
    <div class="chblock-in">
    <div class="chtl-in">Приход</div>
    <div id="ch-in"></div>
    </div>
    );
};

ButtonIn.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ButtonIn;

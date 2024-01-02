import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "./App.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

export const App = () => {
  const layouts = {
    sm: [
      { i: "a", x: 0, y: 0, w: 1, h: 2 },
      { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: "c", x: 4, y: 0, w: 2, h: 2 },
    ],
    xs: [
      { i: "a", x: 0, y: 0, w: 1, h: 2 },
      { i: "b", x: 1, y: 0, w: 1, h: 2 },
      { i: "c", x: 2, y: 0, w: 1, h: 2 },
    ],
  };
  return (
    <ResponsiveGridLayout
      className="layout board"
      breakpoints={{ sm: 698, xs: 0 }}
      layouts={layouts}
      cols={{ sm: 6, xs: 3 }}
      rowHeight={150}
    >
      <div key="a" className="item">
        a
      </div>
      <div key="b" className="item">
        b
      </div>
      <div key="c" className="item">
        c
      </div>
    </ResponsiveGridLayout>
  );
};

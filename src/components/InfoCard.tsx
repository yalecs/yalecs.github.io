<<<<<<< HEAD
<<<<<<< HEAD
interface InfoCardProps {
  data: string;
  description: string;
}

export const InfoCard = ({ data, description }: InfoCardProps) => (
  <div className="flex">
    <div
      className="w-[300px] mx-auto md:w-full min-w-[200px]"
      style={{
        backgroundColor: "#323844",
        borderRadius: 25,
        position: "relative",
        paddingLeft: 35,
        paddingRight: 35,
        paddingBottom: 39,
        paddingTop: 64,
        color: "rgba(255, 255, 255, 0.50)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#404859",
          borderRadius: 37.333,
          padding: 20,
          width: "123px",
          textAlign: "center",
          fontWeight: 700,
          fontSize: 25,
          color: "white",
          position: "absolute",
          left: 0,
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
          top: -30,
        }}
      >
        {data}
      </div>
      {description}
    </div>
  </div>
);
=======
import {CardWrapper} from "./CardWrapper";

=======
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)
interface InfoCardProps {
  data: string;
  description: string;
}

export const InfoCard = ({ data, description }: InfoCardProps) => (
  <div className="flex">
    <div
      style={{
        backgroundColor: "#323844",
        borderRadius: 25,
        position: "relative",
        paddingLeft: 35,
        paddingRight: 35,
        paddingBottom: 39,
        paddingTop: 64,
        color: "rgba(255, 255, 255, 0.50)",
        width: 300,
        textAlign: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#404859",
          borderRadius: 37.333,
          padding: 20,
          width: "123px",
          textAlign: "center",
          fontWeight: 700,
          fontSize: 25,
          color: "white",
          position: "absolute",
          left: 0,
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
          top: -30,
        }}
      >
        {data}
      </div>
      {description}
    </div>
<<<<<<< HEAD

)
>>>>>>> a848807 (added components to about page)
=======
  </div>
);
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)

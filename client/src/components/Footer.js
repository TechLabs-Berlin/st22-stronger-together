import { Typography } from "@mui/material";

const links = [
  { displayName: "A", href: "" },
  { displayName: "B", href: "" },
  { displayName: "C", href: "" },
];

function Footer() {
  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#3e4551" }}
    >
      <div className="container p-4 pb-0">
        <section className="">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <Typography variant="h5">STRONGER TOGETHER</Typography>
              <Typography variant="p">
                
              </Typography>
            </div>
          </div>
        </section>
      </div>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022
        
      </div>
    </footer>
  );
}

export default Footer;

import React, { useState } from "react";
import { withTheme } from "styled-components";
import ButtonLess from "./component/00-comparison/ButtonStyledless";
import Alert from "./component/Alert";
import Button from "./component/Button";
import Card from "./component/Card";
import Dialog from "./component/Dialog";
import "./styles.scss";

const App = (props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <div className="section a">
        <h3>Without Styled System and With Styled System</h3>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <ButtonLess bg={props.theme.colors.blue}>
            Without Styled System
          </ButtonLess>
          <Button bg={props.theme.colors.blue} p="40px">
            With Styled System
          </Button>
        </div>
      </div>

      <div className="section b">
        <h3>Getting Started</h3>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Alert bg="#5a5a5a" color="#fff" message="Mozilla Space Jakarta" />
        </div>
      </div>

      <div className="section c">
        <h3>Responsive Styles</h3>

        {/* width={[ 1, 1 / 2, 1 / 4 ]}
          width={[ 1, '260px', '10em' ]}
          theme -> width={{ sm: 1, md: 1 / 2, lg: 1 / 4 }}
         */}

        <Button
          bg={{ _: "blue" }}
          width={[1, 1 / 2, 1 / 4]}
          borderRadius={["500px", "32px", "0px"]}
          p="40px"
        >
          Tombol kesenangan
        </Button>
      </div>

      <div className="section d">
        <h3>Variant</h3>
        <div>
          <Card>
            Kami adalah relawan dan kontributor berbagai proyek Mozilla, yang
            secara giat dan antusias melakukan berbagai hal untuk meluaskan Misi
            Mozilla ke seluruh Nusantara
          </Card>
          <Card typeCard="primary">
            Kami adalah relawan dan kontributor berbagai proyek Mozilla, yang
            secara giat dan antusias melakukan berbagai hal untuk meluaskan Misi
            Mozilla ke seluruh Nusantara
          </Card>
          <Card typeCard="danger">
            Kami adalah relawan dan kontributor berbagai proyek Mozilla, yang
            secara giat dan antusias melakukan berbagai hal untuk meluaskan Misi
            Mozilla ke seluruh Nusantara
          </Card>
        </div>
      </div>

      <div className="section f">
        <h3>Custom Props</h3>
        <Button onClick={() => setOpen(true)}>Buka</Button>
        <Dialog
          isOpen={isOpen}
          onClose={() => setOpen(false)}
          rounded="16px"
          back="rbga(0, 0, 0, 0.2)"
        >
          Kami adalah relawan dan kontributor berbagai proyek Mozilla, yang
          secara giat dan antusias melakukan berbagai hal untuk meluaskan Misi
          Mozilla ke seluruh Nusantara
        </Dialog>
      </div>
    </div>
  );
};

export default withTheme(App);

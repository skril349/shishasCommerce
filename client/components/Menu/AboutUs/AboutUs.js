import React, { useState, useEffect } from "react";
import Layout from "../../../layout/Layout";
import { Button, Grid } from "semantic-ui-react";

import { getAboutUsApi } from "../../../api/aboutUs";
import { map } from "lodash";
export default function AboutUs() {
  const [partners, setPartners] = useState([]);
  const [aboutUsData, setAboutUsData] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await getAboutUsApi();
      setAboutUsData(response);

      const partnersApi = [];
      partnersApi.push(response[0].partner1);
      partnersApi.push(response[0].partner2);
      partnersApi.push(response[0].partner3);
      partnersApi.forEach((object) => {
        object.image = "";
      });
      partnersApi[0].image = response[0].partner_1;
      partnersApi[1].image = response[0].partner_2;
      partnersApi[2].image = response[0].partner_3;
      setPartners(partnersApi);
      console.log(partnersApi);
    })();
  }, []);
  return (
    <Layout>
      <div fluid className="about-us">
        <div className="about-us__partners">
          <Grid>
            {map(partners, (partner) => (
              <Grid.Column key={partner.id} mobile={16} tablet={8} computer={4}>
                <Partners partner={partner} />
              </Grid.Column>
            ))}
          </Grid>
        </div>
      </div>
    </Layout>
  );
}

function Partners(props) {
  const { partner } = props;
  console.log(partner);
  const [loading, setLoading] = useState(false);
  return (
    <div className="about-us__partner">
      <p>{partner.name}</p>
      <p>{partner.study}</p>
    </div>
  );
}

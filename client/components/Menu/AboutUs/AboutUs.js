import React, { useState, useEffect } from "react";
import Layout from "../../../layout/Layout";
import { Button, Grid, Image, Card } from "semantic-ui-react";
import { BASE_PATH } from "../../../utils/constants";
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
  console.log(aboutUsData);

  return (
    <Layout>
      <div fluid className="about-us">
        <div className="about-us__partners">
          <Grid>
            {map(partners, (partner) => (
              <Grid.Column key={partner.id} mobile={16} tablet={8} computer={5}>
                <Partners partner={partner} />
              </Grid.Column>
            ))}
          </Grid>
        </div>
        <div className="about-us__mision">
          {aboutUsData ? aboutUsData[0].mision : null}
        </div>
        <div className="about-us__vision">
          {aboutUsData ? aboutUsData[0].vision : null}
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
      <Card>
        <Image src={`${BASE_PATH}${partner.image.url}`} wrapped ui={false} />
        <Card.Content>
          <div>
            <h1>{partner.name}</h1>
          </div>
          <Card.Meta>
            <span className="date">CEO</span>
          </Card.Meta>
          <Card.Description>{partner.study}</Card.Description>
        </Card.Content>
      </Card>

      {/* 
      <div className="about-us__image">
        <Image
          src={`${BASE_PATH}${partner.image.url}`}
          // fluid={true}
        />
      </div>
      <p className="about-us__partner__name">{partner.name}</p>
      <p className="about-us__partner__study">{partner.study}</p> */}
    </div>
  );
}

import React from 'react';
import { Text, Layout, Section,	SectionContent } from 'react-native-rapi-ui';

import InfoGraph from '../components/InfoGraph';

const effekt = {
    labels: ["Mån", "Tis", "Ons", "Tors", "Fre", "Lör", "Sön"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 50]
      }
    ]
};

const fasBelastning = {
  labels: ["Fas 1", "Fas 2", "Fas 3"],
  datasets: [
    {
      data: [20, 45, 28]
    }
  ]
};


export default function () {
	return (
		<Layout>
			<Section>
        <SectionContent>
					<Text size='xl'>Energianvändning denna vecka (kWh)</Text>
				</SectionContent>
				<SectionContent>
					<InfoGraph data={effekt}/>
				</SectionContent>
			</Section>

      <Section>
        <SectionContent>
					<Text size='xl'>Fasbelastning</Text>
				</SectionContent>
				<SectionContent>
					<InfoGraph data={fasBelastning}/>
				</SectionContent>
			</Section>			
		</Layout>
	);
}

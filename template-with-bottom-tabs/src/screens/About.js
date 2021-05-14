import React from 'react';
import { Layout, Section, SectionContent } from 'react-native-rapi-ui';

import InfoGraph from '../components/InfoGraph';

const data = {
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
					<InfoGraph data={data}/>
				</SectionContent>
			</Section>	
		</Layout>
	);
}

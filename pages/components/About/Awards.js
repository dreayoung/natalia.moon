import Image from 'next/image';
import { List } from 'antd';

import medal from '../../../public/medal.png';

const data = [
  {
    title: 'The Prix de Lausanne',
    description: (
      <div className="font-bdsans text-xs text-bbrown">
        Spain, <span className="italic">2023</span>
      </div>
    ),
  },
  {
    title: 'The Benois de la Danse',
    description: (
      <div className="font-bdsans text-xs text-bbrown">
        Bolshoi Theatre, <span className="italic">2023</span>
      </div>
    ),
  },
  {
    title: 'The Princess Grace Awards',
    description: (
      <div className="font-bdsans text-xs text-bbrown">
        New York, <span className="italic">2019</span>
      </div>
    ),
  },
  {
    title: 'The National Dance Awards',
    description: (
      <div className="font-bdsans text-xs text-bbrown">
        Brazil, <span className="italic">2013</span>
      </div>
    ),
  },
  {
    title: 'The Positano Premia la Danza Leonide Massine',
    description: (
      <div className="font-bdsans text-xs text-bbrown">
        Italy, <span className="italic">2010</span>
      </div>
    ),
  },
];

export default function Awards() {
  return (
    <div className="md:my-20">
      <div className="font-brstd text-6xl md:text-7xl pt-6 text-bbrown/10 md:whitespace-nowrap">
        Awards &amp; Achievements
      </div>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Image src={medal} alt="medals" className="w-10" />}
              title={
                <div className="font-bdsans font-black text-sm md:text-xl text-bbrown">
                  {item.title}
                </div>
              }
              description={item.description}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

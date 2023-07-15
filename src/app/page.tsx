'use client';
import React from 'react';
import { Button } from 'antd';
import { BookOutlined, RightOutlined } from '@ant-design/icons';

interface IntroCardProps {
  iconSrc: any;
  title: any;
  description: any;
}

const IntroCard: React.FC<IntroCardProps> = ({ iconSrc, title, description }) => {
  return (
    <div className="card flex items-center">
      <div className="card-icon">
        <img src={iconSrc} alt="card icon" className="w-9 h-9" />
      </div>
      <div className="card-content ml-2">
        <div className="card-title text-xl font-bold text-black mb-2">{title}</div>
        <p className="card-description text-sm text-gray-500 mt-2">{description}</p>
      </div>
    </div>
  );
};


export default function Home() {
  const cardData = [
    {
      iconSrc: "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
      title: "智海浪潮",
      description: "一款海洋环境预测商业化AI",
    },
    {
      iconSrc: "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
      title: "智海浪潮",
      description: "一款海洋环境预测商业化AI",
    },
    {
      iconSrc: "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
      title: "智海浪潮",
      description: "一款海洋环境预测商业化AI",
    },
    {
      iconSrc: "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
      title: "智海浪潮",
      description: "一款海洋环境预测商业化AI",
    },
    {
      iconSrc: "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
      title: "智海浪潮",
      description: "一款海洋环境预测商业化AI",
    },
    {
      iconSrc: "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
      title: "智海浪潮",
      description: "一款海洋环境预测商业化AI",
    },

    // Add more card data as needed
  ];
  return (
    <main>
      <div className="h-screen w-screen">

        <div className="overflow-hidden h-screen w-screen bg-gray-400 flex items-center justify-center">
          <div className="text-center">
            <div className="font-bold text-6xl text-blue-900">智海浪潮</div>
            <div className="font-bold text-4xl text-blue-900">SciAI Ocean Anticipator</div>
            <div className="text-lg text-blue-900 mt-2">一款海洋环境预测商业化AI</div>

            <div className="flex flex-col items-center mt-4">
              <div className="flex items-center">
                <Button type="primary" shape="round" icon={<RightOutlined />} size={'large'} className="m-4">
                  前往使用
                </Button>
                <Button type="default" shape="round" icon={<BookOutlined />} size={'large'} ghost className="m-4">
                  使用文档
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden h-screen w-screen bg-white-600 flex items-center justify-center">
          <div className="text-center">
            <div className="font-bold text-5xl text-blue-900 mb-4">介绍</div>

            <div className="grid grid-cols-2 gap-4 m-2 mt-4">
              {cardData.map((card, index) => (
                <div key={index} className="mt-12 mb-12 ml-14 mr-14 p-4">
                  <IntroCard title={card.title} description={card.description} iconSrc={card.iconSrc} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-hidden h-screen w-screen bg-white-600 flex items-center justify-center">Section 3</div>
      </div>
    </main >

  )
}
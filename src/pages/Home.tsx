import { useState } from "react";

const Home = () => {
  const [trips, setTrip] = useState([
    {
      eid: "4",
      title:
        "เที่ยวสิ้นปี บ้านอีต่องเหมืองปิล็อก ชมหมอก กินหมูกระทะ ล่าทางช้างเผือก",
      url: "https://www.wongnai.com/trips/travel-at-etong-pilok",
      description:
        "จังหวะ จะเที่ยว บ้านอีต่อง เหมืองปิล็อก ตามล่าทะเลหมอกหน้าหนาว เดินเที่ยวหมู่บ้านเหมืองเก่าน่ารัก กินหมูกระทะท้าลมหนาว รอดูทางช้างเผือก แล้วปิดทริปที่น้ำตก",
      photos: [
        "https://img.wongnai.com/p/1600x0/2019/12/25/183af5673b074e55a3842aca97676220.jpg",
        "https://img.wongnai.com/p/1600x0/2019/12/25/54961e4326954765a80cd20e2044083d.jpg",
        "https://img.wongnai.com/p/1600x0/2019/12/25/9bbcb032afc145d19e485defcf2067c1.jpg",
        "https://img.wongnai.com/p/1600x0/2019/12/25/2974828fdb16492da0e8f35f627ade7a.jpg",
      ],
      tags: [
        "จุดถ่ายรูป",
        "หมู่บ้าน",
        "ภูเขา",
        "ธรรมชาติ",
        "ถ่ายรูปสวย",
        "บ้านอีต่องเหมืองปิล็อก",
        "กาญจนบุรี",
      ],
    },
  ]);

  return (
    <>
      <div className="p-4 xl:px-[12rem]">
        <div className="mt-5">
          <div className="text-center text-6xl text-blue-400 font-bold">
            เที่ยวไหนดี
          </div>
          <div className="mt-4">
            <input
              className="border-b p-2 w-full placeholder:text-center focus:ring-0 text-center placeholder:font-medium"
              type="text"
              placeholder="หาที่เที่ยวแล้วไปกัน..."
            />
          </div>
        </div>
        <div className="mt-8">
          {trips?.length > 0 ? (
            trips?.map((item: any, index: number) => (
              <div key={index}>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 md:col-span-4">
                    <img
                      src={item?.photos[0]}
                      alt="image..."
                      loading="lazy"
                      className="rounded-3xl"
                    />
                  </div>
                  <div className="col-span-12 md:col-span-8">
                    <div className="flex flex-col gap-2">
                      <div className="text-2xl">{item?.title}</div>
                      <div className="flex flex-col">
                        <p className="font-light">{item?.description}</p>
                        <div className="flex gap-3 items-center">
                          <div className="font-thin text-sm">หมวด</div>
                          <div className="flex gap-2">
                            {item?.tags?.map((tag: any, i: number) => (
                              <div key={i} className="line underline">
                                {tag}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className=" hidden md:flex md:gap-5">
                        {item?.photos?.map((photo: any, i: number) => (
                          <div key={i}>
                            {i > 0 && (
                              <img
                                src={photo}
                                alt="image..."
                                loading="lazy"
                                className="rounded-3xl h-[124px]"
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;

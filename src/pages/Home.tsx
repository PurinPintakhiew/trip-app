import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ReadMore } from "../components/ReadMore";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, ReducerSelectorProps } from "../store";
import { fetchTrips } from "../reducers/tripSlice";

const Home = () => {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");

  const { trips, loading } = useSelector(
    (state: ReducerSelectorProps) => state.trip
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (keyword) {
      setFilter(keyword);
    }
  }, [keyword]);

  useEffect(() => {
    if (filter || filter === "") {
      navigate(`/${filter}`);
      dispatch(fetchTrips(filter));
    }
  }, [dispatch, filter]);

  const handlerSearch = (e: any) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <div className="p-4 xl:px-[12rem]">
        <div className="mt-5">
          <div className="text-center text-6xl text-blue-400 font-bold">
            <Link to={"/"}>เที่ยวไหนดี</Link>
          </div>
          <div className="mt-4">
            <input
              name="keyword"
              className="border-b-2 p-2 w-full placeholder:text-center focus:ring-0 text-center placeholder:font-medium bg-transparent"
              type="text"
              placeholder="หาที่เที่ยวแล้วไปกัน..."
              value={filter}
              onChange={handlerSearch}
            />
          </div>
        </div>
        <div className="mt-8">
          {loading ? (
            <div className="text-center">กำลังโหลดข้อมูล...</div>
          ) : (
            <>
              {trips?.length > 0 ? (
                trips?.map((item: any, index: number) => (
                  <div key={index} className="p-2 mb-5">
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-12 md:col-span-4">
                        <img
                          src={item?.photos[0]}
                          alt="image..."
                          loading="lazy"
                          className="rounded-3xl h-full"
                        />
                      </div>
                      <div className="col-span-12 md:col-span-8">
                        <div className="flex flex-col justify-between h-full gap-4">
                          <div className="flex flex-col gap-4">
                            <div className="text-2xl">
                              <Link to={item?.url}>{item?.title}</Link>
                            </div>
                            <div className="flex flex-col">
                              <ReadMore
                                str={item?.description}
                                url={item?.url}
                              />
                              <div className="flex gap-3 items-center">
                                <div className="font-bold text-sm bg-red-500 text-white rounded-md px-2">
                                  หมวด
                                </div>
                                <div className="flex gap-2">
                                  {item?.tags?.map((tag: any, i: number) => (
                                    <Link
                                      key={i}
                                      to={`/${tag}`}
                                      className="line underline"
                                    >
                                      {tag}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="hidden lg:flex">
                            {item?.photos?.map((photo: any, i: number) => (
                              <div key={i}>
                                {i > 0 && (
                                  <img
                                    src={photo}
                                    alt="image..."
                                    loading="lazy"
                                    className="rounded-3xl h-[120px] mr-5"
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
                <>
                  <div className="text-center">ไม่พบข้อมูล</div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;

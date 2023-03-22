import style from '../../src/App.module.scss'
import { StateVisibleContextProvider } from "../../src/context/StateVisibleContext";
import Footer from "../../src/components/Footer/Footer";
import { GetServerSideProps, NextPage } from 'next'
import axios from "axios";
import SortMovie from "../../src/components/SortMovie/SortMovie";
import MovieGallery from "../../src/components/MovieGallery/MovieGallery";
import MovieCard from "../../src/components/MovieCard/MovieCard";
import Header from '../../src/components/Header/Header';
import { useRouter } from 'next/router';

export interface MovieData {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    genres: string[];
    budget: number;
    overview: string;
    revenue: number;
    runtime: number;
    tagline: string;
    vote_average: number;
    vote_count: number;
}


interface DataFromServer {
    count : any
    searchResult: MovieData[];
}

const IndexPage: NextPage<DataFromServer> = ({count, searchResult }): JSX.Element => {
    // console.log(count)
    return (
        <div className={style.page_wrapper}>
            <div className={style.main_wrapper}>
                <StateVisibleContextProvider>
                    <Header/>
                    <main className={style.wrapper_component}>
                        <SortMovie />
                        <MovieGallery>
                            {searchResult.map((item: any) => (
                                <MovieCard
                                    key={item.id}
                                    keyID={item.id}
                                    title={item.title}
                                    year={item.release_date}
                                    genres={item.genres.join(', ')}
                                    urlImg={item.poster_path}
                                />
                            ))}
                        </MovieGallery>
                    </main>
                </StateVisibleContextProvider>
                <Footer />
            </div>
        </div>
    );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const url = `http://localhost:4000/movies?limit=9`
    const route = useRouter()

    let res = await axios.get(`${url}&sortBy=vote_count&sortOrder=desc`)
    
    if(query.title){
        res = await axios.get(`${url}&search=${query.title}&searchBy=title`)
    }
    if(query.genre){
        res = await axios.get(`${url}&filter=${query.genre}`)
    }
    if(query.sortOrder){
        res = await axios.get(`${url}&sortBy=${query.sortBy}&sortOrder=${query.sortOrder}`)
    }

    return {
        props: {
            // count: route.asPath,
            searchResult: res.data.data,
        },
    };
};
import { useRouter } from "next/router";
import style from '../../src/App.module.scss'
import { StateVisibleContextProvider } from "../../src/context/StateVisibleContext";
import Header from "../../src/components/Header/Header";
import Footer from "../../src/components/Footer/Footer";
import { GetServerSideProps, NextPage } from 'next'
import axios from "axios";
import SortMovie from "../../src/components/SortMovie/SortMovie";
import MovieGallery from "../../src/components/MovieGallery/MovieGallery";
import MovieCard from "../../src/components/MovieCard/MovieCard";

export interface Movie {
    id: number;
    title: string;
    posterPath: string;
    releaseDate: Date;
    genres: string[];
    budget: number;
    overview: string;
    revenue: number;
    runtime: number;
    tagline: string;
    voteAverage: number;
    voteCount: number;
}

interface DataFromServer {
    similarMoviesByGenre: Movie[];
}

const IndexPage: NextPage<DataFromServer> = ({ similarMoviesByGenre }): JSX.Element => {
    return (
        <div className={style.page_wrapper}>
            <div className={style.main_wrapper}>
                <StateVisibleContextProvider>
                    <Header />
                    <main className={style.wrapper_component}>
                        <SortMovie />
                        <MovieGallery>
                            {similarMoviesByGenre.map((item: any) => (
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
    const res = await axios.get(`http://localhost:4000/movies?limit=9?${query}`)
    return {
        props: {
            similarMoviesByGenre: res.data.data,
        },
    };
};
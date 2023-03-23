import style from '../../src/App.module.scss'
import { StateVisibleContextProvider } from "../../src/context/StateVisibleContext";
import Footer from "../../src/components/Footer/Footer";
import { GetServerSideProps, NextPage } from 'next'
import axios from "axios";
import SortMovie from "../../src/components/SortMovie/SortMovie";
import MovieGallery from "../../src/components/MovieGallery/MovieGallery";
import MovieCard from "../../src/components/MovieCard/MovieCard";
import MovieDescription from "../../src/components/MovieDescription/MovieDescription";

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
    currentMovie: MovieData;
    similarMoviesByGenre: MovieData[];
}

const IndexPage: NextPage<DataFromServer> = ({ currentMovie, similarMoviesByGenre }): JSX.Element => {
    return (
        <div className={style.page_wrapper}>
            <div className={style.main_wrapper}>
                <StateVisibleContextProvider>
                    <MovieDescription
                        title={currentMovie.title}
                        poster_path={currentMovie.poster_path}
                        vote_average={currentMovie.vote_average}
                        genres={currentMovie.genres}
                        release_date={currentMovie.release_date}
                        runtime={currentMovie.runtime}
                        overview={currentMovie.overview}
                    />
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
    const res = await axios.get(`http://localhost:4000/movies/${query.id}`)

    const data = await axios.get(`http://localhost:4000/movies?limit=10&filter=${res.data.genres.join(',')}`);

    const movies = data.data.data.filter((movie: MovieData) => movie.id.toString() !== query.id?.toString());

    return {
        props: {
            currentMovie: res.data,
            similarMoviesByGenre: movies,
        },
    };
};
import './rank.styles.scss';

const Rank = ({ currentUser }) => {
    const { name, entries } = currentUser;

    return(
        <div className='rank-container'>
            <h2>
                {name}, your current rank is #{entries}
            </h2>
        </div>
    )
}

export default Rank;
import './Reviews.css'
import Carousel from 'react-elastic-carousel'
import { reviews } from '../../portfolio'

const ReviewItem = ({ data }) => {
  const { name, from, content } = data || {}
  return (
    <div className='review_content_item'>
      <p className='content'>&ldquo;{content}&ldquo;</p>
      <p className='from'>
        <span>{name}</span> - {from}
      </p>
    </div>
  )
}
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 5 },
]
const Reviews = () => (
  <section className='section skills ' id='skills'>
    <div className='review_container'>
      <h2 className='section__title review'>
        What my <span className='text-primary'>clients</span> &{' '}
        <span className='text-primary'>colleague</span> <br />
        say About our Amazing Project{' '}
        <span className='text-primary'>Collaboration</span>
        <hr className='hr__primary' />
      </h2>
    </div>
    <div className='review_content_container'>
      <Carousel
        breakPoints={breakPoints}
        itemPadding={[5, 15]}
        pagination={false}
      >
        {reviews.map((review, index) => (
          <ReviewItem key={review.name} index={index} data={review} />
        ))}
      </Carousel>
    </div>
  </section>
)

export default Reviews

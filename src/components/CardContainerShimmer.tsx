import ProductCardShimmer from './ProductCardShimmer'
function CardContainerShimmer() {
    return (
        <>
            {Array(10).fill(null).map((_, i) => <ProductCardShimmer key={i} />)
        }
        </>
    )
}

export default CardContainerShimmer

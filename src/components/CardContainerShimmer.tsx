import ProductCardShimmer from './ProductCardShimmer'
function CardContainerShimmer() {
    return (
        <>
            {Array(4).fill(null).map((_, i) => <ProductCardShimmer key={i} />)}
        </>
    )
}

export default CardContainerShimmer

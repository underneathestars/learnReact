import Card from "../Cards/cards"
import "./cards-wrapper-style.css"

export const CardsWrapper = () => {
    return(
    <div className="cardsWrapper">
        <Card title="Esperienze lavorative" desc="loremLorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nesciunt aliquam laborum nobis dolores magni temporibus alias possimus cupiditate optio. Laborum quos voluptas unde, vitae dolores aut consequatur repudiandae tempora."/>
		<Card title="Lingue" desc="loremLorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nesciunt aliquam laborum nobis dolores magni temporibus alias possimus cupiditate optio. Laborum quos voluptas unde, vitae dolores aut consequatur repudiandae tempora."/>
		<Card title="Interessi" desc="loremLorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nesciunt aliquam laborum nobis dolores magni temporibus alias possimus cupiditate optio. Laborum quos voluptas unde, vitae dolores aut consequatur repudiandae tempora."/>
    </div>
    )
};
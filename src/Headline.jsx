export default function Headline({topic, extra}){
    return (
        <div className="w-75/100 flex justify-between mt-5 mb-5 ml-40">
            <h3 className="text-2xl font-medium inline-block">{topic}</h3>
            {extra && <span>{extra}</span>}
        </div>
    );
}
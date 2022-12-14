import Input from './Input';

const AuthInputs = ({ requiredDatas, onChange }) => {
  return (
    <div>
      {requiredDatas.map((requiredData) => {
        return <Input title={requiredData.title} placeholder={requiredData.placeholder} key={requiredData.id} onChange={() => onChange(requiredData.id)} />;
      })}
    </div>
  );
};
export default AuthInputs;

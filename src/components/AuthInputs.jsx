import Input from './Input';

const AuthInputs = ({ requiredDatas, onChange }) => {
  return (
    <div className={`w-full`}>
      {requiredDatas.map((requiredData) => {
        return <Input requiredData={requiredData} key={requiredData.id} onChange={(value) => onChange({ id: requiredData.id, value: value })} />;
      })}
    </div>
  );
};
export default AuthInputs;

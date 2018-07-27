function validateEntry(entry) 
{
   const schema = {
	title: Joi.string().min(5).required();
   };

return Joi.validate(entry, schema);
}
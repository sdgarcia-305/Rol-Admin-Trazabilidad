export const FileInput = ({ register }) => {

    return (<>

        <label className="block mb-2.5 text-sm text-white font-medium text-heading" for="file_input">Subir Archivo</label>
        <input
            className="cursor-pointer bg-green-100 hover:font-bold rounded-md bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-80 px-4 shadow-xs placeholder:text-body"
            id="file_input"
            type="file"
            {...register("foto")}
            accept="image/*" />

    </>);

}
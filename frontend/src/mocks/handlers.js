import { rest } from 'msw'

export const handlers = [

    rest.post('http://localhost:8080/api/beneficiary', async (req, res, ctx) => {
        try {
            const details = JSON.parse(req.body);
            // Mock response data
            const mockResponseData = { id: 123, ...details }; // Modify this as needed

            return res(
                ctx.status(200),
                ctx.json(mockResponseData)
            );
        } catch (error) {
            return res(
                ctx.status(500),
                ctx.json({ error: 'Internal Server Error' })
            );
        }
    })

]

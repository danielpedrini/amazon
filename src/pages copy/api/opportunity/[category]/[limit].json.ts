import type { APIRoute } from 'astro';
import { supabase } from '../../../../lib/supabase';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
    const category = params.category;
    const limit = params.limit;

    const { data: preco_comparacao, error } = await supabase.rpc('get_preco_comparacao', {
        input_category: category,
        input_limit: limit,
    });

    if (error) {
        console.error('Erro ao buscar dados:', error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify(preco_comparacao), {
        headers: { 'Content-Type': 'application/json' },
    });
};
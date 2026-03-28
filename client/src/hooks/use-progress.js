import { useState, useEffect } from 'react';
import API from '../services/api';

export const useProgress = (careerId) => {
    const [progress, setProgress] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProgress = async () => {
        if (!careerId) return;

        try {
            setLoading(true);
            const res = await API.get(`/progress/${careerId}`);
            setProgress(res.data.data);
            setError(null);
        } catch (err) {
            console.error('Error fetching progress:', err);
            if (err.response?.status === 404) {
                setProgress({
                    careerId,
                    completedSteps: [],
                    currentModuleIndex: 0,
                    currentStepIndex: 0,
                    startedAt: new Date().toISOString()
                });
            } else {
                setError(err.message);
            }
        } finally {
            setLoading(false);
        }
    };

    const updateProgress = async (progressData) => {
        if (!careerId) return;

        try {
            const res = await API.post('/progress', {
                careerId,
                ...progressData
            });
            setProgress(res.data.data);
            return res.data.data;
        } catch (err) {
            console.error('Error saving progress:', err);
            setError(err.message);
            throw err;
        }
    };

    useEffect(() => {
        fetchProgress();
    }, [careerId]);

    return {
        progress,
        loading,
        error,
        updateProgress,
        refetch: fetchProgress
    };
};